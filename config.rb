# Compass configuration file

# Project specific
theme_path = 'docroot'

# Require any additional compass plugins here.
require 'modular-scale'
require 'singularitygs'
require 'breakpoint'

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = theme_path + '/css'
sass_dir = theme_path + '/scss'
images_dir = theme_path + '/images'
javascripts_dir = theme_path + '/js'

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false