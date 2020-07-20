# NSHfirstportfolio
# NangShen-First Project-Portfolio

"(This project worksheet copies from [original repo](https://github.com/Nangshen16/NangShen-Portfolio-/) )

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete


#Project Description

We will work on First Project which is about Personal Portfolio website. It will introduce about me , my previous projects and languge skills using HTML,CSS, JavaScript ,JQuery.So we can apply Software Engineer Job. I will be using HTML, CSS(flexbox and Grid) to create content and column layout. It must be fit in Mobile,tablet and desktop responsive.

#Google sheet
https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0
https://github.com/Nangshen16/NangShen-Portfolio-

#WireFrames

Mobile,Desktop,Tablet https://imgur.com/fn8RLtm

### Time/Priority Matrix 
https://www.figma.com/file/vYOKBDyYn081gpWrL1J69x/NSH-s-Portfolio?node-id=4%3A2


#MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.


# MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase


## PostMVP 

- Anything else that is not MVP

#Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions. Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

# MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 5hr | 1.5hr | -hr|
| Project Previews | H | 3hr | -hr | -hr|
| Regular Nav | H | H | -hr | -hr|
| Adding Form | H | 1.5hr| -hr | -hr |
| Other sections and flex| M | 4hr | 2hr | -hr|
| Working with API | H | 3hrs| 2hr | -hr |
| Responsive | H | 3hr | -hr | -hr|
| Social Media Icons | L | 1hr | -hr | -hr|
| Total | H | 19.5hrs| -hrs | -hrs |

# PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | L | 3hr | -hr | -hr|
| Banner letters wiggle | L | 1hr | -hr | -hr|
| Interactive Banner | M | 4hr | -hr | -hr|
| Materialize | H | 4hr | -hr | -hr|
| Bootstrap | H | 4hr | -hr | -hr|
| Make own icon | L | 4hr | -hr | -hr|
| Total | H | 20hrs| -hrs | -hrs |


# Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 fontawesome,W3 school,Youtube.

 # code snippet 
 Those made my sliders work
 ```style.css
 .projectsSlides {
    display: flex;
    /*justify-content:center;*/
    color:rgb(56, 61, 61);
    width: 600px;
    height: auto;
    background-color:white;
    overflow-x:auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    margin:0 auto;


}
.projectsSlides img {
    
    width:100%;
    /*height: 300px;*/
    /*padding:10px;*/
}

.slider {
    /*border:1px solid ;*/
    width: 100%;
    flex-shrink:0;
    height:100%;
    scroll-snap-align: start;

}
```
# Issues and resolutions
When I deployed my code into Netify ,Jquery didn't work without adding 's' at the end of http from the index.html.


