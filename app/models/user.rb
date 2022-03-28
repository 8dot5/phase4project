class User < ApplicationRecord
    validates :username, uniqueness: true
    # TODO: add validations 
    # validates :password
end
