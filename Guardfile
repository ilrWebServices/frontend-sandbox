# More info at https://github.com/guard/guard#readme
require 'modular-scale'
require 'singularitygs'
require 'breakpoint'

guard 'sass',
  :input => 'docroot/scss',
  :output => 'docroot/css',
  :compass => true,
  :style => :compressed

guard 'livereload', :port => '35777' do
  watch(%r{.+\.(css|js)$})
  callback(:start_begin) { `touch docroot/.drupal_streamline_guard_running` }
  callback(:stop_end) { `rm docroot/.drupal_streamline_guard_running` }
end
