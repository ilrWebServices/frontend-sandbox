# More info at https://github.com/guard/guard#readme

guard 'sass',
  :input => 'docroot/scss',
  :output => 'docroot/css',
  :compass => true
  #:style => :compressed

guard 'livereload', :port => '35777' do
  watch(%r{.+\.(css|js)$})
end
