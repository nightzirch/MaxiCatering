<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'maxicatering');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         't*g78>o+V,RBz)41u#NG_*QQX-rGJ^,PMVyUAWeNcePUTk/bPYHj:;KxxFKQQ`!9');
define('SECURE_AUTH_KEY',  '%B&9:e$IQ9NJsFsbezSz$I/6-#f#NCA8*Bk$sJI$KO(vMw2,GpQEIV5*Qac E5{v');
define('LOGGED_IN_KEY',    'nq7$IesNRTboHQC<JA 1tXlYQ1:)EmU3Q7S~NqTP=N$Tk:v4kb!&9BF2u;163r,p');
define('NONCE_KEY',        '3T4O@/!olsxWWq}Z1L$U(W(3[%yJ9aD8id&)e;1uKwvwW0HXKI?elW~lx<UHcJE!');
define('AUTH_SALT',        '&4T~[oGisP`#(}=BxSF>H4&|NN2un8GV6s$1 ]gewNl9#&;kji&Jq,kPzyH32L?y');
define('SECURE_AUTH_SALT', '6bC[m*U?HMChT;|4G30WZch6=Mi%]Ic7h6v!NX|_(^nwSDOi#[C-i[ZHJv.-9B5_');
define('LOGGED_IN_SALT',   'Q_+-@7ZSU{OK=$-fqvcj,k/IS!F?[=a#7pJ>Qc;hX?gAT0i[.*Z|Ph__xPT/;D5c');
define('NONCE_SALT',       'v2LIM>EXgmE29[(_R~mo=r&{{^*g2UH-)xc11eU:p|I&YEOOQesh1f|Mdh,UsU%Z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
