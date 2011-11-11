<?php
$piereg = get_option( 'pie_register' );
$piereg_custom = get_option( 'pie_register_custom' );
if( $_POST['notice'] ){
	echo '<div id="message" class="updated fade"><p><strong>' . $_POST['notice'] . '.</strong></p></div>';
}
?>
<div id="pie-register">
<form method="post" action="" enctype="multipart/form-data">
	<?php if( function_exists( 'wp_nonce_field' )) wp_nonce_field( 'piereg-update-options'); ?>
	<p class="submit"><input name="Submit" value="<?php _e('Save Changes','piereg');?>" type="submit" /></p>
	<h3><?php _e('Custom CSS for Register & Login Pages', 'piereg');?></h3>
                     <p><?php _e('CSS Rule Example:', 'piereg');?>
<code>
#user_login{
	font-size: 20px;	
	width: 97%;
	padding: 3px;
	margin-right: 6px;
}</code>
                     <table class="form-table">
                        <tbody>
                        <tr valign="top">
                       		<th scope="row"><label for="register_css"><?php _e('Custom Register CSS', 'piereg');?></label></th>
                        	<td><textarea name="piereg_register_css" id="register_css" rows="20" cols="40" style="width:80%; height:200px;"><?php echo $piereg['register_css'];?></textarea></td>
                        </tr>
                        <tr valign="top">
                       		<th scope="row"><label for="login_css"><?php _e('Custom Login CSS', 'piereg');?></label></th>
                        	<td><textarea name="piereg_login_css" id="login_css" rows="20" cols="40" style="width:80%; height:200px;"><?php echo $piereg['login_css'];?></textarea></td>
                        </tr>
                        </tbody>
                     </table>
                     <input name="action" value="pie_reg_update" type="hidden" />
	<input type="hidden" name="presentation_page" value="1" />
                    <p class="submit"><input name="Submit" value="<?php _e('Save Changes','piereg');?>" type="submit" /></p>
</div>
