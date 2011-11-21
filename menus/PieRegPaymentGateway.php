<?php
$piereg = get_option( 'pie_register' );
$piereg_custom = get_option( 'pie_register_custom' );
if( $_POST['notice'] ){
	echo '<div id="message" class="updated fade"><p><strong>' . $_POST['notice'] . '.</strong></p></div>';
}
?>
<h2><?php _e('Payment Gateway Settings', 'piereg');?></h2>
<div id="pie-register">
<form method="post" action="" enctype="multipart/form-data">
	<?php if( function_exists( 'wp_nonce_field' )) wp_nonce_field( 'piereg-update-options'); ?>
	<p class="submit"><input name="Submit" value="<?php _e('Save Changes','piereg');?>" type="submit" /></p>
	<div class="label"><?php _e('Enter Your paypal hosted button ID.', 'piereg');?></div>
    <div class="input"><input type="text" name="piereg_paypal_butt_id" id="paypal_butt_id" style="width:100px;" value="<?php echo $piereg['paypal_butt_id'];?>" /></div>
	<div class="label"><?php _e('Paypal PDT Token', 'piereg');?></div>
	<div class="input"><input type="text" name="piereg_paypal_pdt" id="paypal_pdt" style="width:300px;" value="<?php echo $piereg['paypal_pdt'];?>" /></div>
	<div class="infos">Inportant Information:
		<p><?php _e('Set Thank You URL In Step 2', 'piereg');
		echo '</p><p><strong>'.wp_login_url().'</strong>';?></p>
		<p><?php _e('SET this variables at STEP 3', 'piereg');?></p>
		<p><strong><?php _e('rm=2', 'piereg');?></strong></p>
		<p><strong><?php _e('notify_url='.wp_login_url(), 'piereg');?></strong></p>
	</div>
	<input name="action" value="pie_reg_update" type="hidden" />
	<input type="hidden" name="payment_gateway_page" value="1" />
	<p class="submit"><input name="Submit" value="<?php _e('Save Changes','piereg');?>" type="submit" /></p>
</form>
</div>
