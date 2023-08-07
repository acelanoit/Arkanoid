class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.string :username
      t.integer :score
      t.date :date

      t.timestamps
    end
  end
end
