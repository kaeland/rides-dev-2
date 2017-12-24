# The Rides App 

## Background

**Rides**, as it is currently called, is a simple featured mobile app for connecting students who are looking for rides to church. Students who frequently attend church are often in need of figuring out how they'll get from school, to a local church service, and then back to school again. Typically, a group of students without a means for transportation will coordinate with another student who is willing to drive the group to church, or vice versa. Coordinating these rides to a church service can sometimes be a bit of a nuisance due to the changing availability of students who have vehicles. 

A potential solution to this small inconvenience would be the use of a mobile application that takes away some of the tediousness of having to coordinate a ride to and from a local church on a weekly basis. Having searched through the IOS app store, there weren't any apps that **exactly** solved the concerns stated above.

And so the ideation/creation of **Rides**!!

## Development

Thinking of a way to help some of your classmates is one thing, but actually doing so presents an entirely new set of challenges. 

With little to no background in developing mobile applications, and applications in general, figuring out the best way to build this application has been somewhat of a journey. From choosing what programming language should be used, to securing the learning resouces to begin building the idea, it's safe to say that the struggle was "real" for this novice dev. 

With a bit of research and quite a few Udemy tutorials, the following tools are being used in building **Rides**: 
1. [React Native](https://facebook.github.io/react-native)
2. [Redux](https://redux.js.org)
3. [React Navigation](https://reactnavigation.org)
4. [Expo.io (Expo Client & Expo XDE)](https://expo.io)
5. [Atom](https://atom.io) (now using [Visual Studio Code](https://code.visualstudio.com))
6. [Google Firebase (Realtime Database)](https://firebase.google.com/)
7. [Coolors](https://coolors.co)

## Current Goals

Before submitting this app to the IOS App Store (and hopefully to the Google Play Store),there are a few development tasks yet to be completed: 

1. Properly commenting the codebase for ease of reading:

   It would be really cool if one day, this app could have contributors to assist in maintaining the code for this app. Currently, there are quite a few places where comments would assist in understanding the reasoning behind syntax structure and methodology (...looking at you Redux).

2. Completing a login feature that won't require the use of a social media account:

   The current login method requires a user to login via his/her Facebook account, this may not be the best way to structure authentication, especially given that some students may not use Facebook. 

3. Requesting details of the current user: 

   In the Google Firebase Console, the name and userID of each user has been helpful in organizing the database's structure. In the application's current state, using Facebook's authentication methods have provided user details. Having to get rid of the Facebook login prompt will present the need of having to request the details from the user when he or she opens the app for the first time. 

   The details that will be requested are:
   * First Name
   * Last Name
   * The Church the user currently attends 

4. Testing with Jest:

     The idea of finally implementing [Jest](https://facebook.github.io/jest) as the testing library for this code is exciting! Having had some practice with this framework through an online tutorial, there is still hope for using it in this app. 

5. Actuall User Testing: 

   Expo.io provides a [pretty cool publishing feature](https://docs.expo.io/versions/latest/guides/publishing.html) that allows others to view your app prior to production. After completing the goals above, it will be great to show others what's been developed, in addition to a bit of feedback on what can be done to make **Rides** a success!

6. Submitting **Rides** to the App Store:

   The finall frontier of this journey! Hopefully it is not too far off. :D

## Future Goals

1. Using [Lottie](https://airbnb.design/lottie) as an App Welcome Screen:

   Having a really cool, yet, welcoming animation as an intro to Rides would be dope! If anyone out there is good with this kind of thing, please feel free to holla at me via the email below: 

   For those curious minds out there:

   "Lottie is an iOS, Android, and React Native library that renders After Effects animations in real time, allowing apps to use animations as easily as they use static images." - airbnb.design/lottie

   Expo.io has a way of implementing After Effects animations into React Native apps [using Lottie](https://docs.expo.io/versions/latest/sdk/lottie.html) too!

## Contact

If you have any ideas about the development of **Rides**, and would even like to contribute, please feel free to reach out: 

*kaeland1@gmail.com*

God Bless!
