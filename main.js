alert("Thank you for playing my game 'Choices to Phoenix', have fun!!!")

var driveOrBus = confirm(
  "You are driving to Phoenix, do you want to drive your car (press OK) or take the bus? (press Cancel)"
)
if (driveOrBus) {
  driveOrBus = alert("OK, let's drive!")
  var drive = driveOrBus
  var callFriend = confirm(
    "You are at the gas station for a break and realize that while you were inside your car was stolen.  You have a choice, do you call a friend from Phoenix to come pick you up (press OK) or do you try to hitchhike with another patron from the station going your way?(press Cancel)"
  )
  if (callFriend) {
    alert("Let's give'em a call..")
    alert(
      "You wait around the gas station for your friend to get there to pick you up.  During that time you are able to catch up on all of your emails and call some friends and family members that you have been meaning to connect with for a while.  Once your friend arrives, you have a really nice drive the rest of the way to Phoenix and the Police reach out to you to say they’ve found your car in good condition."
    )
    alert(
      "Congratulations on making some good choices and arriving safe to Phoenix while connecting with some valuable people in your life. GameOver :)"
    )
  } else {
    alert("OKAAAY, let's hitchhike...")
    alert(
      "You find a group of interesting characters looking to take on extra passengers in their van to their destination and Phoenix is on the way.  The only condition for being allowed to ride with them is that you have to sing songs with them the entire way which you agree to."
    )

    alert(
      "As it turns out, your choice was risky but paid off, you have made some new friends and enjoyed the rest of your trip singing songs with the group and made it to Phoenix in the end.  Additionally, the Police reach out to tell you that they’ve found your car in pretty good condition, you should only need to have it cleaned when you get it back. GameOver :)"
    )
  }
} else {
  var driveOrBus = alert("ok, bus it is!")
  alert(
    "Since you want to take the bus, take another local bus to the bus station terminal, but the local bus is late to your stop.  You end up arriving too late to the bus station terminal taking you to Phoenix."
  )
  alert(
    "You cancel your trip to Phoenix, but you use extra time to catch up on all of your emails and call some friends and family members that you have been meaning to connect with for a while.  You didn’t make it to Phoenix, but made good use of your time instead and reconnected with some valuable people in your life. GameOver :)"
  )
}
