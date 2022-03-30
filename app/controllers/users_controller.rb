class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def create
        user = User.create!(user_params)
        session[:current_user] = user.id
        render json: user, status: :created
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No current user", status: :unauthorized
        end
    end

    def destroy
        find_user.destroy!
        render json: {}, status: :gone
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :confirm_password)
    end

end
