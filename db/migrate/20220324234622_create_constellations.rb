class CreateConstellations < ActiveRecord::Migration[6.1]
  def change
    create_table :constellations do |t|
      t.string :name
      t.string :meaning
      t.string :abbreviation
      t.string :right_ascension_hrs_mins
      t.string :declination_degs_mins
      t.float :area_sq_deg
      t.float :percentage_of_sky_area
      t.string :quadrant
      t.integer :brightest_star_id
      t.integer :main_stars
      t.text :origin
      t.string :image_url

      t.timestamps
    end
  end
end
