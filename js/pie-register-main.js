function set_add_del_code(){
	jQuery('.remove_code').show();
	jQuery('.add_code').hide();
	jQuery('.add_code:last').show();
	jQuery(".code_block:only-child > .remove_code").hide();
}
function selremcode(clickety){
	jQuery(clickety).parent().remove(); 
	set_add_del_code(); 
	return false;
}
function seladdcode(clickety){
	jQuery('.code_block:last').after(
    	jQuery('.code_block:last').clone());
	jQuery('.code_block:last input').attr('value', '');

	set_add_del_code(); 
	return false;
}
function set_add_del(){
	jQuery('.remove_row').show();
	jQuery('.add_row').hide();
	jQuery('.add_row:last').show();
	jQuery(".row_block:only-child > .remove_row").hide();
}
function selrem(clickety){
	jQuery(clickety).parent().parent().remove(); 
	set_add_del(); 
	return false;
}
function seladd(clickety){
	jQuery('.row_block:last').after(
    	jQuery('.row_block:last').clone());
	jQuery('.row_block:last input.custom').attr('value', '');
	jQuery('.row_block:last input.extraops').attr('value', '');
	var custom = jQuery('.row_block:last input.custom').attr('name');
	var reg = jQuery('.row_block:last input.reg').attr('name');
	var profile = jQuery('.row_block:last input.profile').attr('name');
	var req = jQuery('.row_block:last input.required').attr('name');
	var fieldtype = jQuery('.row_block:last select.fieldtype').attr('name');
	var extraops = jQuery('.row_block:last input.extraops').attr('name');
	var c_split = custom.split("[");
	var r_split = reg.split("[");
	var p_split = profile.split("[");
	var q_split = req.split("[");
	var f_split = fieldtype.split("[");
	var e_split = extraops.split("[");
	var split2 = c_split[1].split("]");
	var index = parseInt(split2[0]) + 1;
	var c_name = c_split[0] + '[' + index + ']';
	var r_name = r_split[0] + '[' + index + ']';
	var p_name = p_split[0] + '[' + index + ']';
	var q_name = q_split[0] + '[' + index + ']';
	var f_name = f_split[0] + '[' + index + ']';
	var e_name = e_split[0] + '[' + index + ']';
	jQuery('.row_block:last input.custom').attr('name', c_name);
	jQuery('.row_block:last input.reg').attr('name', r_name);
	jQuery('.row_block:last input.profile').attr('name', p_name);
	jQuery('.row_block:last input.required').attr('name', q_name);
	jQuery('.row_block:last select.fieldtype').attr('name', f_name);
	jQuery('.row_block:last input.extraops').attr('name', e_name);
	set_add_del(); 
	return false;
}

jQuery(document).ready(function() {
	<?php if( !$piereg['code'] ){ ?>
	jQuery('#codepass').hide();
	<?php } ?>
	<?php if( !$piereg['password_meter'] ){ ?>
	jQuery('#meter').hide();
	<?php } ?>
	<?php if( !$piereg['disclaimer'] ){ ?>
	jQuery('#disclaim_content').hide();
	<?php } ?>
	<?php if( !$piereg['license'] ){ ?>
	jQuery('#lic_content').hide();
	<?php } ?>
	<?php if( !$piereg['privacy'] ){ ?>
	jQuery('#priv_content').hide();
	<?php } ?>
	<?php if( !$piereg['email_verify'] ){ ?>
	jQuery('#grace').hide();
	<?php } ?>
	<?php if( $piereg['captcha'] != 2 ){ ?>
	jQuery('#reCAPops').hide();
	<?php } ?>
	<?php if( $piereg['captcha'] != 1 ){ ?>
	jQuery('#SimpleDetails').hide();
	<?php } ?>
	<?php if( !$piereg['custom_msg'] ){ ?>
	jQuery('#enabled_msg').hide();
	<?php } ?>
	<?php if( !$piereg['custom_adminmsg'] ){ ?>
	jQuery('#enabled_adminmsg').hide();
	<?php } ?>
	jQuery('#email_verify').change(function() {
		if(jQuery('#email_verify').attr('checked'))
			jQuery('#grace').show();
		else
			jQuery('#grace').hide();
		return true;
	});
	jQuery('#code').change(function() {		
		if (jQuery('#code').attr('checked'))
			jQuery('#codepass').show();
		else
			jQuery('#codepass').hide();
		return true;
	});
	jQuery('#pwm').change(function() {		
		if (jQuery('#pwm').attr('checked'))
			jQuery('#meter').show();
		else
			jQuery('#meter').hide();
		return true;
	});
	jQuery('#disclaimer').change(function() {		
		if (jQuery('#disclaimer').attr('checked'))
			jQuery('#disclaim_content').show();
		else
			jQuery('#disclaim_content').hide();
		return true;
	});
	jQuery('#license').change(function() {		
		if (jQuery('#license').attr('checked'))
			jQuery('#lic_content').show();
		else
			jQuery('#lic_content').hide();
		return true;
	});
	jQuery('#privacy').change(function() {		
		if (jQuery('#privacy').attr('checked'))
			jQuery('#priv_content').show();
		else
			jQuery('#priv_content').hide();
		return true;
	});
	jQuery('#captcha').change(function() {
		if(jQuery('#captcha').attr('checked')){
			jQuery('#reCAPops').hide();
			jQuery('#SimpleDetails').show();
			}
			
		else
			jQuery('#SimpleDetails').hide();
		return true;
	});
	jQuery('#recaptcha').change(function() {
		if(jQuery('#recaptcha').attr('checked')){
			jQuery('#SimpleDetails').hide();
			jQuery('#reCAPops').show();
			}
		else
			jQuery('#reCAPops').hide();
		return true;
	});
	jQuery('#none').change(function() {
		if(jQuery('#none').attr('checked')){
			jQuery('#SimpleDetails').hide();
			jQuery('#reCAPops').hide();
			}
		return true;
	});
	jQuery('#custom_msg').change(function() {
		if(jQuery('#custom_msg').attr('checked'))
			jQuery('#enabled_msg').show();
		else
			jQuery('#enabled_msg').hide();
		return true;
	});
	jQuery('#custom_adminmsg').change(function() {
		if(jQuery('#custom_adminmsg').attr('checked'))
			jQuery('#enabled_adminmsg').show();
		else
			jQuery('#enabled_adminmsg').hide();
		return true;
	});
	set_add_del_code();
	set_add_del();
});
