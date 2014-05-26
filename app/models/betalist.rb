# encoding: utf-8
class Betalist < ActiveRecord::Base
  nilify_blanks
  # attributes: email, created_at, updated_at

  validates :email, presence: true
  validates :email, uniqueness: true

  def send_notifications
    BetalistMailer.delay.notify_admin(self, 'shawn@logicly.org')
    #BetalistMailer.delay.notify_admin(self, 'justin@logicly.org')
    BetalistMailer.delay.notify_user(self)
  end
end