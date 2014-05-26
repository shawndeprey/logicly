class BetalistMailer < ActionMailer::Base
  default from: "Logicly <shawn@logicly.org>"

  def notify_admin(betalist, email)
    @betalist = betalist
    @email = email
    mail(:to => @email, :subject => "New Logicly Betalist Signup")
  end

  def notify_user(betalist)
    @betalist = betalist
    mail(:to => @betalist.email, :subject => "You're on the Logicly Betalist")
  end
end
