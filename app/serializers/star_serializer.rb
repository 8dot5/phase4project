class StarSerializer < ActiveModel::Serializer
  attributes :id, :name, :right_ascension_hrs_mins, :declination_degs_mins, :apparent_magnitude, :age, :mass_kg, :radius_km, :bright_star, :distance_from_sun, :image_url
  has_one :constellation
end
