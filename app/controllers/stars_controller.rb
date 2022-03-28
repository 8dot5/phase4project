class StarsController < ApplicationController

    def create
        star = Star.create!(star_params)
        render json: star, status: :created
    end

    def index
        render json: Star.all, status: :ok
    end

    def show
        render json: find_star, status: :ok
    end

    def update
        find_star.update!(star_params)
        render json: find_star, status: :ok
    end

    def destroy
        find_star.destroy!
        render json: {}
    end

    private

    def find_star
        Star.find(params[:id])
    end
    
    def star_params
        params.permit(
            :name,
            :right_ascension_hrs_mins,
            :declination_degs_mins,
            :apparent_magnitude,
            :age,
            :mass_kg,
            :radius_km,
            :bright_star,
            :image_url,
            :constellation_id,
            :distance_from_sun
        )
    end

end
