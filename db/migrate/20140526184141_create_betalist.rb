class CreateBetalist < ActiveRecord::Migration
  def change
    create_table :betalists do |t|
      t.string :email
      t.timestamps
    end
  end
end