require 'sinatra'

get '/iframe_content' do
  erb :iframe_content
end

get '/' do
  erb :index
end
