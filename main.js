alert("Thank you for playing my game 'Choices to Phoenix', have fun!!!")
var fName = prompt("What is your first name?")
if (fName) {
  alert("Ok, let's play")
  var driveOrBus = confirm(
    `Ok ${fName}, you are driving to Phoenix, do you want to drive your car (press OK) or take the bus? (press Cancel)`
  )
  if (driveOrBus) {
    alert(`Cool people always drive, I knew you were cool ${fName} !`)
    var callFriend = confirm(
      `You are at the gas station for a break and realize that while you were inside your car was stolen.  Well ${fName}, do you call a friend from Phoenix to come pick you up (press OK) or do you try to hitchhike with another patron from the station going your way?(press Cancel)`
    )
    if (callFriend) {
      alert("Let's give'em a call..")
      alert(
        "You wait around the gas station for your friend to get there to pick you up.  During that time you are able to catch up on all of your emails and call some friends and family members that you have been meaning to connect with for a while.  Once your friend arrives, you have a really nice drive the rest of the way to Phoenix and the Police reach out to you to say they’ve found your car in good condition."
      )
      alert(
        `Congratulations ${fName} on making some good choices and arriving safe to Phoenix while connecting with some valuable people in your life. 
        
GameOver :)`
      )
    } else {
      alert("OKAAAY, let's hitchhike...")
      alert(
        "You find a group of interesting characters looking to take on extra passengers in their van to their destination and Phoenix is on the way.  The only condition for being allowed to ride with them is that you have to sing songs with them the entire way which you agree to."
      )

      alert(
        `As it turns out ${fName}, your choice was risky but paid off, you have made some new friends and enjoyed the rest of your trip singing songs with the group and made it to Phoenix in the end.  Additionally, the Police reach out to tell you that they’ve found your car in pretty good condition, you should only need to have it cleaned when you get it back. 
        
GameOver :)`
      )
    }
  } else {
    var driveOrBus = alert(`Well ${fName}, the bus it is!`)
    alert(
      "Since you want to take the bus, you will need take another local bus to the bus station terminal, but the local bus is late to your stop.  You end up arriving too late to the bus station terminal taking you to Phoenix."
    )
    alert(
      `You cancel your trip to Phoenix, but you use extra time to catch up on all of your emails and call some friends and family members that you have been meaning to connect with for a while.  You didn’t make it to Phoenix, but made good use of your time instead and reconnected with some valuable people in your life. 
      
GameOver :)`
    )
  }
} else {
  alert(
    `Oh I see, you don't want to give me your name...well too bad, 
    
GameOver :(
OR IS IT????????  .. press OK to play`
  )
  alert(`Let's play a hidden game instead...`)
  var guessNumber = prompt("Enter a number 1, 2, or 3 to reveal your fortune.")
  if (guessNumber === "1") {
    alert(`Your fortune is...

  'A golden egg of opportunity falls into your lap this month.'
    
  If you want to play the Choices to Phoenix game, please refresh and make sure to enter your NAME this time.`)
  } else if (guessNumber === "2") {
    alert(`Your fortune is...
    
  'A person of words and not deeds is like a garden full of weeds.'
  
  If you want to play the Choices to Phoenix game, please refresh and make sure to enter your NAME this time.`)
  } else if (guessNumber === "3") {
    alert(`Your fortune is...

  'Because you demand more from yourself, others respect you deeply.'
    
  If you want to play the Choices to Phoenix game, please refresh and make sure to enter your NAME this time.`)
  } else {
    alert(`WOW! you are not very good at games :(`)
  }
}
