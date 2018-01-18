<?php
/**
 * Created by wpbooking.
 * Developer: nasanji
 * Date: 2/6/2017
 * Version: 1.0
 */
wp_enqueue_style( 'st-select.css' );
wp_enqueue_script( 'st-select.js' );
$default=array(
    'title'=>'',
    'placeholder'=>'',
    'is_required'=>'',
);
if(isset($data)){
    extract(wp_parse_args($data,$default));
}else{
    extract($default);
}

if($is_required == 'on'){
    $is_required = 'required';
}

if(!isset($field_size)) $field_size='lg';

?>
<div class="form-group form-group-<?php echo esc_attr($field_size)?> form-group-icon-left">
    <span>
        <input name="returnOrOneWay" value="R" checked="checked" type="radio"> Return
        <input name="returnOrOneWay" value="O" type="radio"> One Way
    </span>
</div>