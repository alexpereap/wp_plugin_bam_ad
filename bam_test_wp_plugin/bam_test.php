<?php

/**
 * Plugin name: Born again media AD test plugin
 * Description: Enables a shortcode to add an AD into a post
 */

function bam_add_scripts_css() {
    wp_register_style('bam-ad-style', plugins_url('support/iframe.css', __FILE__));
    wp_enqueue_script("jquery");
    wp_enqueue_style('bam-ad-style');
}

add_action( 'wp_enqueue_scripts', 'bam_add_scripts_css', 1000 );

function bam_AD_build($attrs = []){

    // config ad background according to post category
    $bg = "#000";
    if( isset(get_the_category()[0]->name) ){
        switch(strtolower(get_the_category()[0]->name)){
            case 'nba':
                $bg = "#ffa500";
                break;
            case 'mlb':
                $bg = '#151550';
                break;
        }
    }

    // returns ad
    if( isset($attrs['type']) ){
        switch(strtolower($attrs['type'])){
            case 'pick':
                $iframeID = mt_rand(1, 1000) * time();

                // gets the html content of the iframe to embed the AD and replaces its atrributes
                $ad = file_get_contents(plugin_dir_path(__FILE__) . 'templates/pick/iframe.html');
                $ad = str_replace("{url}", plugins_url('templates/pick/', __FILE__), $ad);
                $ad = str_replace("{iframeID}", $iframeID, $ad);
                $ad = str_replace("{end_date}", $attrs['end_date'], $ad);
                $ad = str_replace("{bgColor}", $bg, $ad);
                return $ad;
                break;
        }
    }
}


add_shortcode('bam_AD', 'bam_AD_build');