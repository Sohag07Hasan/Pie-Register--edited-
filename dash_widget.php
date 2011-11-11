<?php
if( !class_exists('PieRegisterWidget') ){
	class PieRegisterWidget{
		function PieRegisterWidget() { //contructor
			// Add the widget to the dashboard
			add_action( 'wp_dashboard_setup', array($this, 'register_widget') );
			add_filter( 'wp_dashboard_widgets', array($this, 'add_widget') );		
		}
		function register_widget() {
		if ( current_user_can('manage_options') )wp_register_sidebar_widget( 'piereg_invite_tracking', __( 'Invitation Code Tracking', 'piereg' ), array($this, 'widget'), array( 'settings' => 'options-general.php?page=pie-register' ) );
			
		}
		// Modifies the array of dashboard widgets and adds this plugin's
		function add_widget( $widgets ) {
			global $wp_registered_widgets;
	
			if ( !isset($wp_registered_widgets['piereg_invite_tracking']) ) return $widgets;
	
			array_splice( $widgets, 2, 0, 'piereg_invite_tracking' );
	
			return $widgets;
			
		}
		// Output the widget contents
		function widget( $args ) {
			
				
			@extract( $args, EXTR_SKIP );

			echo $before_widget;
	
			echo $before_title;
			echo $widget_name;
			echo $after_title;
	
			global $wpdb;
			$piereg = get_option( 'pie_register' );
			$codes = $piereg['codepass'];
			$usercodes = array();
			foreach($codes as $code){
				$users = $wpdb->get_results( "SELECT user_id FROM $wpdb->usermeta WHERE meta_key='invite_code' AND meta_value='$code'" );
				echo '<h3>' . $code . ': <small style="font-weight:normal">' . count($users) . ' Users Registered.</small></h3>';
			}		
			echo $after_widget;
		
			
		}
	}
} # End Class RegisterPlusWidget

// Start this plugin once all other plugins are fully loaded
add_action( 'plugins_loaded', create_function( '', 'global $piereg_widget; $piereg_widget = new PieRegisterWidget();' ) );
?>