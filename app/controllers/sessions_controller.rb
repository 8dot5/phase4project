require 'byebug'
class SessionsController < ApplicationController
    # skip_before_action :authorized_user, only: [:login]

    # THIS IS WORKING!
    def create
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            # byebug
            render json: user, status: :ok
        else
            render json: {error: "Invalid Password or Username"}, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete(:current_user)
        render json: {}
    end

end
