class ConstellationSerializer < ActiveModel::Serializer
  attributes :id, :name, :abbreviation, :meaning, :right_ascension_hrs_mins, :declination_degs_mins, :area_sq_deg, :percentage_of_sky_area, :quadrant, :brightest_star_id, :main_stars, :origin, :image_url
  has_many :stars
end
