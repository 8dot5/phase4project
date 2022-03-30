# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_30_162703) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "constellations", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.string "right_ascension_hrs_mins"
    t.string "declination_degs_mins"
    t.float "area_sq_deg"
    t.float "percentage_of_sky_area"
    t.string "quadrant"
    t.integer "brightest_star_id"
    t.integer "main_stars"
    t.text "origin"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "meaning"
  end

  create_table "stars", force: :cascade do |t|
    t.string "name"
    t.bigint "constellation_id", null: false
    t.string "right_ascension_hrs_mins"
    t.string "declination_degs_mins"
    t.float "apparent_magnitude"
    t.string "age"
    t.float "mass_kg"
    t.float "radius_km"
    t.boolean "bright_star"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "distance_from_sun"
    t.index ["constellation_id"], name: "index_stars_on_constellation_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  add_foreign_key "stars", "constellations"
end
