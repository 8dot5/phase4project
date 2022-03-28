class SessionsController < ApplicationController

    def create
        user = User.find_by!(name:params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok 
        else 
            render json: {error: "Invalid Password or Username"}, status: :unprocessable_entity
        end 
    end

    def destroy
        session.delete(:user_id)
        render json: {}
    end

end
