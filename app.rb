require 'sinatra'

get '/iframe_content_borked' do
  erb :iframe_content_borked
end

get '/iframe_content_fixed' do
  erb :iframe_content_fixed
end

get '/' do
  erb :index
end

get '/broken' do
  erb :index
end

get '/fixed' do
  erb :index_working
end
