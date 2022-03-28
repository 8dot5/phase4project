class User < ApplicationRecord
    validates :username, uniqueness: true
    # validates :password, 
end
