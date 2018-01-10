<header id="menu2" class="st_menu">
    <div id='top_header' class="header-top <?php echo apply_filters('st_header_top_class','') ?>">
        <div class="text-center">
            <a class="logo" href="<?php echo home_url('/')?>">
                <?php
                $logo_url = st()->get_option('logo');
                if(!empty($logo_url)){
                    ?>
                    <img src="<?php echo esc_url($logo_url); ?>" alt="logo" title="<?php bloginfo('name')?>">
                    <?php
                }
                ?>
            </a>
        </div>
        <div class="menu-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="nav">
                            <?php
                            $logo_mobile_url = st()->get_option('logo_mobile');
                            if(empty($logo_mobile_url)){
                                $logo_mobile_url = $logo_url;
                            }
                            if(has_nav_menu('primary')){
                                $mega_menu = st()->get_option( 'allow_megamenu', 'off' );

                                if($mega_menu == 'on'){
                                    wp_nav_menu( array(
                                        'theme_location' => 'primary',
                                        "container"      => "",
                                        'items_wrap'     => '<ul id="slimmenu" data-title="<a href=\''.home_url('/').'\'><img alt=\''.TravelHelper::get_alt_image().'\' width=auto height=40px class=st_logo_mobile src='.$logo_mobile_url.' /></a>" class="%2$s slimmenu">%3$s</ul>',
                                        'walker' => new ST_Mega_Menu_Walker(),

                                    ) );
                                }else{
                                    wp_nav_menu( array(
                                        'theme_location' => 'primary',
                                        "container"      => "",
                                        'items_wrap'     => '<ul id="slimmenu" data-title="<a href=\''.home_url('/').'\'><img alt=\''.TravelHelper::get_alt_image().'\' width=auto height=40px class=st_logo_mobile src='.$logo_mobile_url.' /></a>" class="%2$s slimmenu">%3$s</ul>',
                                        'walker' => new st_menu_walker(),

                                    ) );
                                }
                            } ?>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>