# World Remit Project
This is the take home assignment for world remit job interview.
The app is built on a container-view-pattern. 
The interface is a simple loader/splash screen interface used to load the data and a home screen that manipulates the returned data into a list.
# Design Decisions
The design decisions i took includes
1. Loosely coupled components to enable easy component swipe out and testability 
2. Ensuring all components have a single responsibilty , either as a presentation component or a container component.
   This ensure the component is more robust and avoids breaking changes if it takes on many responsibilities
3. The presenation component only presents the passed data via props.
4. The Container components provides the data and determines the behaviours of elements on the presentation components
5. Icons and colors are used to provide visual guidance and appeal to components 
6. The color scheme i chosed is close to the brand identity

# Things i was unable to do because of time
1. I was not able to provide more unit test on the interface especially the event handlers
2. Implement an activity icon animation to show data fetching progress
3. Implement a unblock feature (This is a nice to have, not part of the brief)
