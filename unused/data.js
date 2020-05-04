function getRandomizedPhraseVariations() {
    const ordered = getPhraseVariations()

    const randomized = []

    while (ordered.length)
        randomized.push(ordered.splice(Math.floor(Math.random() * ordered.length), 1)[0])

    console.log(randomized)
    return randomized
}

function getPhraseVariations(){
    const lines = window.phraseVariationsSource.split('\n').map(string => string.trim())
    const phrases = []

    while (lines.length) {
        phrases.push({
            target: lines.shift(),
            variations: [ lines.shift(), lines.shift(), lines.shift() ]
        })
    }

    return phrases
}

window.phraseVariationsSource = 
   `my watch fell in the water
    my watch fell in the crevasse
    my watch fell on the floor
    my watch fell to the floor
    prevailing wind from the east
    prevailing wind from the Arabian Sea
    prevailing wind from all directions
    prevailing wind from the left
    never too rich and never too thin
    never too rich or too poor
    never too rich and never too poor
    never too rich and not too poor
    I can see the rings on Saturn
    I can see it clearly now
    I can see the whole of this floor
    I can see the excitement in her eyes
    physics and chemistry are hard
    physics and chemistry research
    physics and chemistry
    physics and chemistry are at the center
    my bank account is overdrawn
    my bank account
    my bank account has been frozen
    my bank account was toast
    elections bring out the best
    elections bring out some very interesting results
    elections bring out the party machine
    elections bring out the worst in people
    a problem with the engine
    a problem with Windows?
    a problem with exactly this sort of interpretation
    a problem with this update
    elephants are afraid of mice
    elephants are afraid of them
    elephants are afraid of fire
    elephants are afraid of human beings
    my favorite place to visit
    my favorite place to meet and hang out
    my favorite place to eat
    my favorite place to eat in the world
    three two one zero blast off
    three two one!
    three two one two two threes
    three two one zero
    my favorite subject is psychology
    my favorite subject
    my favorite subject to write about
    my favorite subject of all time
    watch out for low flying objects
    watch out for this next thing
    watch out for low prices and fast delivery!
    watch out for it
    please provide your date of birth
    please provide your correct billing and shipping address
    please provide your shipping address in the comments below
    please provide your name, email address, city
    we run the risk of failure
    we run the University
    we run the numbers again
    we run the world
    prayer in schools offends some
    prayer in schools
    prayer in schools and religious centers
    prayer in schools throughout the world
    he is just like everyone else
    he is just like you
    he is just like him
    he is just like us
    great disturbance in the force
    great disturbance in the Force
    great disturbance in the force of nature
    great disturbance in the fabric of the universe
    you must be getting old
    you must be a lawyer to practice
    you must be logged in and create an account
    you must be kidding me
    the world is a stage
    the world is not the world
    the world is a dangerous place
    the world is a dirty place
    can I skate with sister today
    can I skate with you?
    can I skate with them
    can I skate with you guys on the surface?
    neither a borrower nor a lender be
    neither a borrower nor a lender be allowed
    neither a borrower nor a lender be guilty
    neither a borrower nor a lender
    one heck of a question
    one heck of a show this one
    one heck of a long time
    one heck of a reindeer!
    question that must be answered
    question that must be answered by both students
    question that must be addressed
    question that must be answered: Who is worthy?
    beware the ides of March
    beware the ides of April!
    beware the ides of the sun i
    beware the ides of March, 9
    double double toil and trouble
    double double toil to come up with?
    double double toil
    double double toil and trouble for Mr
    the force is with you
    the force is always with us
    the force is going to be with you
    the force is a strong one
    you are not a jedi yet
    you are not a member of the militia
    you are not a journalist
    you are not a woman, you are I
    an offer you cannot refuse
    an offer you might not want to make
    an offer you-know-whats
    an offer you
    are you talking to me
    are you talking about that story?
    are you talking about where you live?
    are you talking about a change in strategy?
    yes you are very smart
    yes you are definitely not doing anything necessary
    yes you are a man of the people!
    yes you are
    all work and no play
    all work and the jury came out fine
    all work and go out on their own
    all work and should be accessible to all
    hair gel is very greasy
    hair gel is essential for cushioning and cooling!
    hair gel is a good thing
    hair gel is no exception to this rule
    Valium in the economy size
    Valium in the home
    Valium in the US
    Valium in the Workplace and Research
    the facts get in the way
    the facts get in the way of the narrative!
    the facts get kind of messed up
    the facts get stranger and stranger
    did you have a good time
    did you have a party?
    did you have a wet dream last night?
    did you have one of those in 1951?
    space is a high priority
    space is a place, not a person
    space is a representation of world-space
    space is a pretty simple extension of the
    you are a wonderful example
    you are a person, right?
    you are a bad father!
    you are a traitor to humanity
    do not squander your time
    do not squander your time on this
    do not squander my youth
    do not squander their resources in vain
    do not drink too much
    do not drink or eat anything other than water
    do not drink or smoke
    do not drink or do drugs, never
    popularity is desired by all
    popularity is desired or disapproved of
    popularity is desired, without fear
    popularity is desired
    the music is better than it sounds
    the music is better than the words
    the music is better than it was last year
    the music is better than his
    drove my chevy to the levee
    drove my chevy to the dealership
    drove my chevy pickup home
    drove my chevy to the shop
    but the levee was dry
    but the levee is about 15 ft
    but the levee breaches have now closed
    but the levee broke on April 9
    I took the rover from the shop
    I took the rover from home
    I took the rover off the ground
    I took the rover to check it
    movie about a nutty professor
    movie about a zombie, by the way
    movie about a US
    movie about a gangster Godfather
    come and see our new car
    come and see if they are in
    come and see what they have to say
    come and see for yourself
    coming up with killer sound bites
    coming up with his repertory
    coming up with a fix
    coming up with an answer I really care about
    I am going to a music lesson
    I am going to a conference
    I am going to a doctor
    I am going to a gun range
    the opposing team is over there
    the opposing team is playing too aggressively
    the opposing team
    the opposing team members
    soon we will return from the city
    soon we will have made history yet again
    soon we will have a beach-head inland
    soon we will enter an era of revolution
    I am wearing a tie and a jacket
    I am wearing pants
    I am wearing a tie
    I am wearing some of your trousers
    all together in one big pile
    all together in the long days of summer
    all together in the end
    all together in front of a giant screen
    wear a crown with many jewels
    wear a crown with it
    wear a crown with matching mask
    wear a crown with a hood
    there will be some fog tonight
    there will be some upsides for us
    there will be a call at the last number
    there will be an exception to this rule
    I am allergic to bees and peanuts
    I am allergic to penicillins?
    I am allergic to penicillins
    I am allergic to sunlight
    he is still on our team
    he is still very early into his professional career
    he is still on the job
    he is still on board for the St
    the dow jones index has risen
    the dow jones index, the U
    the dow jones for more info
    the dow jones is so sick w him
    my preferred treat is chocolate
    my preferred treat for late afternoon indulgence
    my preferred treat
    my preferred treat of the Irish Sea
    the king sends you to the tower
    the king sends you to him
    the king sends you to spy on me
    the king sends you to do something
    we are subjects and must obey
    we are subjects of the law
    we are subjects and they have no rights
    we are subjects and not the others
    mom made her a turtleneck
    mom made her claim online on Monday
    mom made her first grocery store run
    mom made her way over to the bed
    goldilocks and the three bears
    goldilocks and the three wise men?
    goldilocks and the bears
    goldilocks and the three dwarfs
    the assignment is due today
    the assignment is not
    the assignment is valued at less than 100
    the assignment is not assignable to us
    what you see is what you get
    what you see here is just the beginning
    what you see in the front
    what you see is exactly what you get
    a quarter of a century
    a quarter of all patients presented with symptoms
    a quarter of voters were against the plan
    a quarter of the market
    the store will close at ten
    the store will close at 3 pm
    the store will close, not that we did
    the store will close by the end of July
    head shoulders knees and toes
    head shoulders knees bent or crouched
    head shoulders knees knees knees
    head shoulders knees half bent at ninety degrees
    the laser printer is jammed
    the laser printer
    the laser printer came into the picture
    the laser printer is there
    all good boys deserve fudge
    all good boys, all good girls
    all good boys and girls
    all good boys and sluts
    just in time for the party
    just in time for the Christmas season!
    just in time for the holidays!
    just in time for spring training
    video camera with a zoom lens
    video camera with a good viewfinder
    video camera with a dual-camera setup
    video camera with a wide-angle lens
    what a monkey sees a monkey will do
    what a monkey, a monkey!
    what a monkey sees a monkey
    what a monkey would do to get it
    the back yard of our house
    the back yard of the Chicago White Sox
    the back yard of Washington DC
    the back yard
    this is a very good idea
    this is a serious game
    this is a very good debate to have
    this is a spreadsheet
    reading week is just about here
    reading week is just around the corner
    reading week is just a public relations effort
    reading week is just beginning
    our fax number has changed
    our fax number
    our fax number!
    our fax number is required
    thank you for your help
    thank you for your help and we look forward
    thank you for making this happen!
    thank you for your interest in volunteering
    no exchange without a bill
    no exchange without prior discussion
    no exchange without notice
    no exchange without disclosure
    the early bird gets the worm
    the early bird, the very first
    the early bird gets the choicest
    the early bird saves the best of everything
    this is too much to handle
    this is too big of a deal
    this is too much frustration right now
    this is too much info, my bad!
    the library is closed today
    the library is much more diverse and diverse topics
    the library is part of the company
    the library is, and why I like it!
    Mary had a little lamb
    Mary had a difficult beginning to life
    Mary had a tendency to catch her breath
    Mary had a decision to make
    this is a non profit organization
    this is a brilliant idea!
    this is a non-interventionist country!
    this is a non-sequitur
    healthy food is good for you
    healthy food is better than low-quality food
    healthy food is good for you, right?
    healthy food is a great start
    hands on experience with a job
    hands on experience with various programming languages
    hands on experience with working from home
    hands on experience with the unit
    this watch is too expensive
    this watch is made from high-precision
    this watch is a tough act to follow
    this watch is not like any other
    the capital of our nation
    the capital of the Golden Horde
    the capital of Burundi
    the capital of the region
    travel at the speed of light
    travel at the speed of light!
    travel at the level of language
    travel at the foot of the Swiss Alps
    gas bills are sent monthly
    gas bills are skyrocketing, too
    gas bills are already in effect in Detroit
    gas bills are included in your rent
    life is but a dream
    life is but a fraction of the pain
    life is but a reflection of your spirit
    life is but a fleeting illusion
    take it to the recycling depot
    take it to the max
    take it to the rafters
    take it to a team that deserves it
    sent this by registered mail
    sent this by way of warning
    sent this by the instruction of thy majesty
    sent this by Paige
    fall is my favorite season
    fall is my passion
    fall is my new favorites!
    fall is my favorite movie of all time
    a fox is a very smart animal
    a fox is a part of our education
    a fox is a fox, regardless of shape?
    a fox is walking away
    the kids are very excited
    the kids are going to love me
    the kids are there for other people
    the kids are fine
    parking lot is full of trucks
    parking lot is adjacent to Ford Field
    parking lot is not an outdoor patio
    parking lot is a good choice
    my bike has a flat tire
    my bike has a crankshaft
    my bike has a fairly standard drivetrain
    my bike has a lifetime warranty
    do not walk too quickly
    do not walk through the desert at night
    do not walk in prayer
    do not walk too closely to either of them!
    a duck quacks to ask for food
    a duck quacks to warn you away
    a duck quacks to ask for some help?
    a duck quacks to hide its fear?
    limited warranty of two years
    limited warranty of only 3 days
    limited warranty of no more than one year
    limited warranty of no less than one year
    the four seasons will come
    the four seasons prior to JR
    the four seasons of A Fistful of Dollars?
    the four seasons that I played there
    the sun rises in the east
    the sun rises and sets every day
    the sun rises
    the sun rises and sets
    it is very windy today
    it is very easy to screw up
    it is very much an aspect of beauty
    it is very difficult to understand in French
    do not worry about this
    do not worry!
    do not worry about protecting your credit score
    do not worry
    want to join us for lunch
    want to join you
    want to join us?
    want to join the community
    make my day you sucker
    make my day
    make my day and make my life easier
    make my day, buddy!
    I can play much better now
    I can play much faster than my father
    I can play much better in real games
    I can play much better over time
    she wears too much makeup
    she wears too much make-up
    she wears too much makeup!
    she wears too many make-up, and
    my bare face in the wind
    my bare face in front of them
    my bare face in his eyes
    my bare face in full view of the camera
    lydia wants to go home
    lydia wants to propose a deal
    lydia wants to do her time
    lydia wants to gain more control
    win first prize in the contest
    win first prize
    win first prize in 1917
    win first prize in the 2011 contest
    freud wrote of the ego
    freud wrote of Jesus as a prophet
    freud wrote of WH
    freud wrote of the use of psychedelics
    always cover all the bases
    always cover all of US
    always cover all sorts of stuff
    always cover all options
    can we play cards tonight
    can we play a movie together?
    can we play again?
    can we play that game then?
    get rid of that immediately
    get rid of him, she did
    get rid of
    get rid of it completely
    the sum of the parts
    the sum of elements of the permutations
    the sum of dollars and cents
    the sum of the numbers
    they love to yap about nothing
    they love to eat meat, it seems
    they love to talk about
    they love to yap on about
    he played a pimp in that movie
    he played a role in the story
    he played a role in that
    he played a big role in that
    I skimmed through your proposal
    I skimmed through the list of proposals
    I skimmed through the text for details
    I skimmed through the notes
    he was wearing a sweatshirt
    he was wearing all leather armor
    he was wearing a red pajama top
    he was wearing at the time
    no more war no more bloodshed
    no more war
    no more war no more death no more suffering!
    no more war no more terrorism
    I will meet you at noon
    I will meet you there
    I will meet with Sen
    I will meet you when you arrive
    I want to hold your hand
    I want to hold a press conference
    I want to thank everyone for their strong support!
    I want to know how the plot develops
    superman never wore a mask
    superman never wore pajamas, right???
    superman never wore his Superman costume
    superman never wore capes
    I listen to the tape everyday
    I listen to the symphony every day
    I listen to the beach
    I listen to the words of Mr
    seasoned golfers love the game
    seasoned golfers love to do
    seasoned golfers love
    seasoned golfers love their clubs
    he cooled off after she left
    he cooled off, and there were no cuts
    he cooled off for an hour
    he cooled off and regained his composure
    my dog sheds his hair
    my dog sheds his fur once a week
    my dog sheds all sorts of hair
    my dog sheds pretty much every week
    join us on the patio
    join us on Tuesday at 3:00pm
    join us on the forum
    join us on Facebook here
    these cookies are so amazing
    these cookies are no longer available
    these cookies are gluten free and refined sugar free
    these cookies are the best!
    I can still feel your presence
    I can still do it
    I can still remember it
    I can still see the place
    the dog will bite you
    the dog will not bite you
    the dog will know where to go
    the dog will be fine
    where did you get that tie
    where did you get it?
    where did you get the book?
    where did you get that robe you wear?
    what a lovely red jacket
    what a lovely way of keeping score
    what a lovely day!
    what a lovely library it is
    do you like to shop on Sunday
    do you like this recipe?
    do you like jazz?
    do you like your grass cut?
    I spilled coffee on the carpet
    I spilled coffee on one of my clothes
    I spilled coffee on you
    I spilled coffee all over the place
    the largest of the five oceans
    the largest of the five spaceports
    the largest of the US
    the largest of the Chinese cities
    shall we play a round of cards
    shall we play it?
    shall we play this game again?
    shall we play games with these poor ducks
    my mother makes good cookies
    my mother makes everything from scratch
    my mother makes a very good custard
    my mother makes the bread every day
    do a good deed to someone
    do a good deed every now and then
    do a good deed?
    do a good job and keep him happy
    quick there is someone knocking
    quick there is plenty of nice views
    quick there is no time for heartbreak
    quick there is a problem
    flashing red light means stop
    flashing red light
    flashing red light of a speeding car
    flashing red light on her left wrist
    where did I leave my glasses
    where did I find you?
    where did I put it?
    where did I get all that?
    on the way to the cottage
    on the way down
    on the way of abolishing the monarchy
    on the way of his life
    a lot of chlorine in the water
    a lot of chlorine in their water
    a lot of chlorine in the water is toxic
    a lot of books
    do not drink the water
    do not drink in case of fire
    do not drink a glass of water before meals
    do not drink too many liquids
    my car always breaks in the winter
    my car always breaks in front of other cars
    my car always breaks in its first week
    my car always breaks in half
    public transit is much faster
    public transit is not an alternative to cars
    public transit is critical to affordable housing development
    public transit is part of society
    zero in on the facts
    zero in on top of it
    zero in on the real issue at hand
    zero in on him
    make up a few more phrases
    make up a few minutes here and there
    make up a large portion of it
    make up a few
    my fingers are very cold
    my fingers are all covered by white fur
    my fingers are much smaller than my thumb
    my fingers are tingly all over again
    the price of gas is high
    the price of gas is too damn high?
    the price of the product will come down
    the price of gas has to come down
    the winner of the race
    the winner of the 1995 US
    the winner of the Aug
    the winner of the Oct
    go out for some pizza and beer
    go out for some fresh air
    go out for some food
    go out for some beer
    effort is what it will take
    effort is what it boils down to
    effort is what it sounds like
    effort is what we try to focus on
    where can my little dog be
    where can my companion support go?
    where can my little girl go if she wants
    where can my little wiggly soul go!!
    if you were not so stupid
    if you were unlucky enough to have to choose!
    if you were already in my top three
    if you were an architect at the time
    not quite so smart as you think
    not quite so smart
    not quite so smart, of course
    not quite so smart after all
    do you like to go camping
    do you like to play the guitar?
    do you like to play Ingress?
    do you like this?
    this person is a disaster
    this person is going to get shot
    this person is who he says he is
    this person is going to be so fucked up
    the imagination of the nation
    the imagination of the man, ie
    the imagination of the thinker
    the imagination of the feminist movement
    universally understood to be wrong
    universally understood to be in compliance
    universally understood to mean the ancients
    universally understood to be male
    listen to five hours of opera
    listen to five hours a day
    listen to five hours per game
    listen to five hours of your favorite podcasts?
    an occasional taste of chocolate
    an occasional taste anyway
    an occasional taste of distrust in my stomach
    an occasional taste
    the protesters blocked all traffic
    the protesters blocked the freeway outside the airport
    the protesters blocked traffic on the highway
    the protesters blocked the main entrance to Beijing
    the acceptance speech was boring
    the acceptance speech of their victors
    the acceptance speech is beside the point
    the acceptance speech at graduation
    work hard to reach the summit
    work hard to reach their goals
    work hard to reach the right people
    work hard to reach consensus among all parties
    a little encouragement is needed
    a little encouragement from you on the way
    a little encouragement is always a good thing
    a little encouragement for it
    stiff penalty for staying out late
    stiff penalty for staying out of sight
    stiff penalty for staying too late
    stiff penalty for staying out so late
    exceed the maximum speed limit
    exceed the maximum given by the program
    exceed the maximum time allowed
    exceed the maximum number
    in sharp contrast to your words
    in sharp contrast to those of Western producers
    in sharp contrast to the West Bank
    in sharp contrast to China
    this leather jacket is too warm
    this leather jacket is really starting to look worn
    this leather jacket is the best jacket to pull
    this leather jacket is going to be fine
    consequences of a wrong turn
    consequences of a failure to act
    consequences of a growing criminal world
    consequences of a foreign terrorist attack
    this mission statement is baloney
    this mission statement is far from complete
    this mission statement sounded good
    this mission statement is kind of vague
    you will loose your voice
    you will loose your arms or legs
    you will loose everything on the spot
    you will loose your business
    every apple from every tree
    every apple from Oklahoma goes through here
    every apple from a bitter apple tree?
    every apple from that sweet tree must be smashed
    are you sure you want this
    are you sure?
    are you sure you want to go?
    are you sure you want to do this?
    the fourth edition was better
    the fourth edition of the US
    the fourth edition, p
    the fourth edition of the Star Trek Data book
    beautiful paintings in the gallery
    beautiful paintings in her dining room
    beautiful paintings in their own right
    beautiful paintings in a wonderful setting
    a yard is almost as long as a meter
    a yard is almost as long as the Ark
    a yard is almost always filled with sun
    a yard is almost completely covered in ash
    destruction of the rain forest
    destruction of the environment
    destruction of the state
    destruction of the planet
    I like to play tennis
    I like to play with my hair
    I like to play what we play
    I like to win
    acutely aware of her good looks
    acutely aware of her surroundings
    acutely aware of her disappointment
    acutely aware of all that involved
    you want to eat your cake
    you want to eat something very different from nothing
    you want to go to a club on Tuesday
    you want to eat a crap sandwich?
    a glance in the right direction
    a glance in the camera, eyes narrowed
    a glance in the rear-view mirror
    a glance in the direction of the play
    I just cannot figure this out
    I just cannot figure out the problem
    I just cannot figure out why
    I just cannot figure it out
    an airport is a very busy place
    an airport is a very major transport hub
    an airport is unable to handle all arrivals
    an airport is now held by the militants
    mystery of the lost lagoon
    mystery of the image
    mystery of the Great Depression
    mystery of the Century
    is there any indication of this
    is there any truth to it?
    is there any of the Old World?
    is there any comparison?
    the chamber makes important decisions
    the chamber makes use of a different technology
    the chamber makes sense
    the chamber makes a lot of noise
    this phenomenon will never occur
    this phenomenon will come to an end
    this phenomenon will continue for decades to come
    this phenomenon will take some time to filter out
    obligations must be met first
    obligations must be complied with
    obligations must be carried out
    obligations must be addressed
    valid until the end of the year
    valid until the end of 2016
    valid until the end of the month
    valid until the end of the next season
    file all complaints in writing
    file all complaints were filed
    file all complaints made by young women
    file all complaints
    a picture is worth many words
    a picture is worth a thousand words
    a picture is worth 1,000 words
    a picture is worth a thousand words!
    this camera takes nice photographs
    this camera takes pictures all day every day
    this camera takes pictures, too
    this camera takes great photos
    it looks like a shack
    it looks like they are in full swing
    it looks like it could be a bit smarter
    it looks like it will be just that soon
    the dog buried the bone
    the dog buried in the garden
    the dog buried in the cemetary?
    the dog buried his head in the sand
    this equation is too complicated
    this equation is different depending on your brand
    this equation is wrong
    this equation is not going to go away
    express delivery is very fast
    express delivery is available during normal business hours
    express delivery is made
    express delivery is expected within 2 business days
    I will put on my glasses
    I will put them in a time machine!
    I will put our best foot forward
    I will put on another show, I promise!!
    a touchdown in the last minute
    a touchdown in the first quarter
    a touchdown in the second quarter for the first
    a touchdown in the fourth quarter
    the treasury department is broke
    the treasury department said in a statement Thursday
    the treasury department is run out of Whitehall
    the treasury department
    a good response to the question
    a good response to my concerns
    a good response to government intrusiveness
    a good response
    the bathroom is good for reading
    the bathroom is good for a snooze
    the bathroom is good for you
    the bathroom is probably the same
    the generation gap gets wider
    the generation gap is not so big anymore
    the generation gap is deeply troubling
    the generation gap
    prepare for the exam in advance
    prepare for the upcoming election
    prepare for the least significant bits
    prepare for the unknown future
    bank transaction was not registered
    bank transaction was an open-ended promise to
    bank transaction was made in February
    bank transaction was intended to bolster Mr
    your etiquette needs some work
    your etiquette needs to be that much better
    your etiquette needs a reality check
    your etiquette needs
    house with new electrical panel
    house with new arrivals in town over the holiday
    house with new items within 10 business days
    house with new food items
    our silver anniversary is coming
    our silver anniversary self-badge
    our silver anniversary toast with Donald J
    our silver anniversary
    the presidential suite is very busy
    the presidential suite
    the presidential suite is located on the second level
    the presidential suite is very nice
    the punishment should fit the crime
    the punishment should be proportional to the crime
    the punishment should be lenient
    the punishment should be sufficient for them
    sharp cheese keeps the mind sharp
    sharp cheese keeps the patties moist
    sharp cheese keeps the dough crispy on the edges!
    sharp cheese keeps the sandwich soft and moist
    the registration period is over
    the registration period runs from Feb
    the registration period will remain open until February 28
    the registration period was opened in the first quarter
    the objective of the exercise
    the objective of it is to control the flow
    the objective of investigation is to know the truth
    the objective of all physics
    historic meeting without a result
    historic meeting without talking about it
    historic meeting without any shortage of participants
    historic meeting without violence
    good at addition and subtraction
    good at addition or subtraction
    good at addition
    good at addition work
    six daughters and seven sons
    six daughters and one son
    six daughters and seven grandchildren
    six daughters and four sons
    a thoroughly disgusting thing to say
    a thoroughly disgusting and distasteful attack
    a thoroughly disgusting thing
    a thoroughly disgusting concoction
    the minimum amount of time
    the minimum amount of time needed to create
    the minimum amount required to stay alive
    the minimum amount you will need to come up
    a very traditional way to dress
    a very traditional way of doing things
    a very traditional way of seeing the world
    a very traditional way
    the aspirations of a nation
    the aspirations of women, their hopes and fears
    the aspirations of the dispossessed working class
    the aspirations of one of the parties
    medieval times were very hard
    medieval times were incredibly prolific
    medieval times were two very different beasts
    medieval times were far superior to us
    a security force of eight thousand
    a security force of 30,000
    a security force of some two thousand men!
    a security force of 1,000 soldiers
    there are winners and losers
    there are winners and losers here
    there are winners and there are losers
    there are winners and losers out there
    the voters turfed him out
    the voters turfed him out of office
    the voters turfed him out on Election Day!
    the voters turfed out George W
    pay off a mortgage for a house
    pay off a mortgage or car loan
    pay off a mortgage or fix a car
    pay off a mortgage for two years?
    the collapse of the Roman empire
    the collapse of US
    the collapse of our institutions
    the collapse of Lehman Brothers in September 2008
    did you see that spectacular explosion
    did you see that attack?
    did you see the video?
    did you see that Deadpool movie today?
    keep receipts for all your expenses
    keep receipts for compliance with US
    keep receipts for all cash transactions
    keep receipts for all of its transactions
    the assault took six months
    the assault took place around 230pm
    the assault took place on Sunday, April 30
    the assault took place on Nov
    get your priorities in order
    get your priorities straight
    get your priorities straight before you commit
    get your priorities in order, Mr
    traveling requires a lot of fuel
    traveling requires a lot of money
    traveling requires a lot of energy
    traveling requires a lot of planning, time
    longer than a football field
    longer than a third
    longer than a two-hour episode
    longer than a third of a second
    a good joke deserves a good laugh
    a good joke
    a good joke and it would be funny
    a good joke deserves a good reaction
    the union will go on strike
    the union will go ahead with the strike
    the union will go down, too
    the union will make sure there is no job
    never mix religion and politics
    never mix religion and economics
    never mix religion with politics
    never mix religion and politics in your rhetoric
    interactions between men and women
    interactions between men and women in society
    interactions between men
    interactions between men and young people
    where did you get such a silly idea
    where did you get such knowledge?
    where did you get such a letter?
    where did you get such a lovely selection?
    it should be sunny tomorrow
    it should be the same across the board
    it should be a non sequitur
    it should be obvious by now
    a psychiatrist will help you
    a psychiatrist will be his primary therapist
    a psychiatrist will do
    a psychiatrist will assess your condition
    you should visit to a doctor
    you should visit to visit him
    you should visit to get your paws on one!
    you should visit the discussion page for this post
    you must make an appointment
    you must make a decision for yourself
    you must make the decisions yourself
    you must make room for the next row
    the fax machine is broken
    the fax machine
    the fax machine in the kitchen?
    the fax machine in his living room
    players must know all the rules
    players must know these facts by now
    players must know all of their move-offs
    players must know when to play hardball
    a dog is the best friend of a man
    a dog is the best friend of a person
    a dog is the best restaurant in town
    a dog is the best dog
    would you like to come to my house
    would you like to come to the races?
    would you like to have lunch with me?
    would you like to try one yourself?
    February has an extra day
    February has an official start date of January 5
    February has an upper limit of 25 February
    February has an interesting mix of games
    do not feel too bad about it
    do not feel too bad about this part
    do not feel too bad about that, though!!
    do not feel too well today
    this library has many books
    this library has in common with other frameworks
    this library has been in development since 2003
    this library has been removed from this project
    that is a very odd question
    that is a good word to think about after
    that is a rare occurrence these days
    that is a very good idea
    a feeling of complete exasperation
    a feeling of powerlessness and helplessness
    a feeling of being in orbit around the comet
    a feeling of ecstasy
    no kissing in the library
    no kissing in the water here!
    no kissing in that city
    no kissing in public
    that agreement is rife with problems
    that agreement is rife with potential pitfalls
    that agreement is rife with contradictions
    that agreement is rife with unfairness
    vote according to your conscience
    vote according to the region
    vote according to your preferences
    vote according to its own values
    my favourite sport is racketball
    my favourite sport when I was a kid
    my favourite sport
    my favourite sport to watch is football
    sad to hear that news
    sad to hear it was taken so easily!
    sad to hear the story
    sad to hear how well they played
    the gun discharged by accident
    the gun discharged and hit me pretty good
    the gun discharged, striking and killing Mrs
    the gun discharged while in the holster
    one of the poorest nations
    one of the people I talked to
    one of the best moments of the series
    one of the most important differences between L
    the algorithm is too complicated
    the algorithm is broken and I have no hope
    the algorithm is already in place!
    the algorithm is more or less optimal
    that land is owned by the government
    that land is owned by the federal government
    that land is owned by the state
    that land is owned by the public
    burglars never leave their business card
    burglars never leave their dwellings again
    burglars never leave their homes
    burglars never leave traces
    the fire blazed all weekend
    the fire blazed within my breast
    the fire blazed all around him
    the fire blazed all day long
    if diplomacy does not work
    if diplomacy does work, it takes time
    if diplomacy does not work, force will be
    if diplomacy does not work out
    the rationale behind the decision
    the rationale behind the wall is quite simple
    the rationale behind this decision is less than subtle
    the rationale behind killing her?
    the cat has a pleasant temperament
    the cat has gone back to sleep
    the cat has a cat in the house
    the cat has a mind of its own
    our housekeeper does a thorough job
    our housekeeper does the washing and cooking
    our housekeeper does not work
    our housekeeper does everything
    her majesty visited our country
    her majesty visited the capital
    her majesty visited Antwerp
    her majesty visited Queen Victoria in 1898
    these barracks are big enough
    these barracks are completely undisturbed
    these barracks are starting to look the same
    these barracks are quite large
    sing the gospel and the blues
    sing the gospel
    sing the gospel?
    sing the gospel in a businesslike manner
    he underwent triple bypass surgery
    he underwent triple coronary bypass surgery Oct
    he underwent triple bypass surgery in 2009
    he underwent triple knee replacement surgery in 2011
    the hopes of a new organization
    the hopes of a child
    the hopes of the White House and Washington
    the hopes of a doomed marriage
    peering through a small hole
    peering through a long stretch of glass
    peering through a thick wall of clouds
    peering through a skyscraper in Hong Kong
    rapidly running short on words
    rapidly running short of cash
    rapidly running short on resources
    rapidly running short of a candidate
    it is difficult to concentrate
    it is difficult to describe him
    it is difficult for them to understand
    it is difficult to come close to fuming
    give me one spoonful of coffee
    give me one word of advice, Mr
    give me one of your autographs!
    give me one word to describe it
    two or three cups of coffee
    two or three cups of boiling water
    two or three cups per day
    two or three cups at a time
    just like it says on the can
    just like it always has been
    just like it says in the book
    just like it says on the label
    electric cars need big fuel cells
    electric cars need massive changes to their energy strategies
    electric cars need as few components as possible
    electric cars need space
    the plug does not fit the socket
    the plug does not go in
    the plug does not come on as easily
    the plug does not come out
    we dine out on the weekends
    we dine out on each other
    we dine out on who they want
    we dine out on our own
    get aboard the ship is leaving
    get aboard the bandwagon of geopolitics
    get aboard the ship and make some music
    get aboard the ship
    the water was monitored daily
    the water was cold and dark
    the water was gone, we could see it
    the water was nice and cold
    a big scratch on the tabletop
    a big scratch
    a big scratch somewhere, waiting to disappear
    a big scratch, huh?
    salesmen must make their monthly quota
    salesmen must make their move
    salesmen must make
    salesmen must make money
    saving that child was an heroic effort
    saving that child was the easy part
    saving that child was part of the motivation
    saving that child was the first thing that came
    granite is the hardest of all rocks
    granite is the hardest material on Earth
    granite is the hardest of the three
    granite is the hardest of all stone
    bring the offenders to justice
    bring the offenders to justice and prosecute them appropriately?
    bring the offenders to a different site
    bring the offenders into the community and send them
    every Saturday he folds the laundry
    every Saturday he reaps the rewards
    every Saturday he folds his blanket, puts it
    every Saturday he arrived at my home
    careless driving results in a fine
    careless driving results in many traffic fatalities
    careless driving results in loss of life
    careless driving results in fatal crashes
    microscopes make small things look big
    microscopes make small things larger
    microscopes make small things look huge
    microscopes make small things seem large
    a coupon for a free sample
    a coupon for example will always give you 20
    a coupon for a free test kit
    a coupon for a week of free shipping
    fine but only in moderation
    fine but only slightly salty in flavor
    fine but only to legal age drinkers
    fine but only up to 2 inches in depth?
    a subject one can really enjoy
    a subject one can empathize with
    a subject one can get hooked on
    a subject one can never fully understand
    that sticker needs to be validated
    that sticker needs to go
    that sticker needs to be redone
    that sticker needs the numbers split, for example
    the fire raged for an entire month
    the fire raged
    the fire raged for over an hour
    the fire raged for eight days and nights
    one never takes too many precautions
    one never takes his eyes off the prize
    one never takes his eyes from his enemy
    one never takes his eye off her
    labour unions know how to organize
    labour unions know how to work together
    labour unions know how to fight
    labour unions know how to work together better
    people blow their horn a lot
    people blow their money on this crap
    people blow their nose with poppers
    people blow their horn and scream joyously?
    a correction had to be published
    a correction had led me astray
    a correction had taken place
    a correction had been made
    I like baroque and classical music
    I like baroque music
    I like baroque stuff a lot
    I like baroque design
    be discreet about your meeting
    be discreet about it
    be discreet about the content of their work
    be discreet about this world
    meet tomorrow in the lavatory
    meet tomorrow in Washington, DC
    meet tomorrow in Dusseldorf
    meet tomorrow in Kenai, Alaska
    suburbs are sprawling up everywhere
    suburbs are sprawling
    suburbs are sprawling suburbs
    suburbs are sprawling and sprawling cities
    shivering is one way to keep warm
    shivering is one way to do this
    shivering is one way to relieve this
    shivering is one way to do it
    try to enjoy your maternity leave
    try to enjoy them
    try to enjoy yourself
    try to enjoy the beginning of the end
    the ventilation system is broken
    the ventilation system
    the ventilation system is very tiny
    the ventilation system is simple and works fine
    dinosaurs have been extinct for ages
    dinosaurs have been extinct for six million years
    dinosaurs have been around for 80 million years!
    dinosaurs have been extinct for 60 million years
    an inefficient way to heat a house
    an inefficient way of doing things
    an inefficient way of solving the problem
    an inefficient way to do things
    the bus was very crowded
    the bus was empty, according to court papers
    the bus was like a tornado
    the bus was so quiet and cool
    an injustice is committed every day
    an injustice is perpetrated against anyone
    an injustice is also at work here
    an injustice is well worth redress
    the coronation was very exciting
    the coronation was an Act of Parliament
    the coronation was a farce
    the coronation was in full swing
    look in the syllabus for the course
    look in the syllabus for Bio 11?
    look in the syllabus for further details
    look in the syllabus for the school
    rectangular objects have four sides
    rectangular objects have three faces
    rectangular objects have been modeled in it
    rectangular objects have a defined aspect ratio
    prescription drugs require a note
    prescription drugs require special licenses
    prescription drugs require approval by the FDA
    prescription drugs require prescriptions from physicians
    the insulation is not working
    the insulation is what you care about
    the insulation is as good as it gets
    the insulation is not airtight at all
    nothing finer than discovering a treasure
    nothing finer than discovering that it does
    nothing finer than discovering a scimitar
    nothing finer than discovering a beautiful new land
    our life expectancy has increased
    our life expectancy in Latin America is just 65
    our life expectancy is about 68 years
    our life expectancy was down significantly
    the cream rises to the top
    the cream rises on the top
    the cream rises and falls with the season
    the cream rises to the top of the tube
    the high waves will swamp us
    the high waves will never be strong again
    the high waves will come straight at you
    the high waves will hit them in the chest
    the treasurer must balance her books
    the treasurer must balance the budget every year
    the treasurer must balance the deficit
    the treasurer must balance the books by April 15
    the location of the crime
    the location of the building
    the location of the right of way
    the location of these artifacts is unknown
    the chancellor was very boring
    the chancellor was wrong to take this course
    the chancellor was also referring to Stephen King
    the chancellor was a big supporter
    the accident scene is a shrine for fans
    the accident scene is a shrine to grief
    the accident scene is a shrine to people
    the accident scene is a mess
    a tumor is OK provided it is benign
    a tumor is OK or not
    a tumor is OK
    a tumor is OK to be close to
    please take a bath this month
    please take a look
    please take a bath and get a massage
    please take a bath and go brush your teeth!
    rent is paid at the beginning of the month
    rent is paid
    rent is paid at least twice a week
    rent is paid to us by other publishers
    for murder you get a long prison sentence
    for murder you will receive the death penalty
    for murder you get a life sentence
    for murder you get a sentence of between 10
    a much higher risk of getting cancer
    a much higher risk of side effects
    a much higher risk of AIDS
    a much higher risk of high blood pressure
    quit while you are ahead
    quit while you are doing it
    quit while you can
    quit while you are on something else
    knee bone is connected to the thigh bone
    knee bone is connected to the hip
    knee bone is connected to the ankle
    knee bone is not one of them
    safe to walk the streets in the evening
    safe to walk away without a record
    safe to walk the streets in New Brunswick
    safe to walk around in
    luckily my wallet was found
    luckily my wallet is paid in bitcoin!
    luckily my wallet does not do this
    luckily my wallet was large enough
    one hour is allotted for questions
    one hour is not enough to find the demo
    one hour is better than a dozen
    one hour is enough
    so you think you deserve a raise
    so you think you are so powerful
    so you think you deserve the best!
    so you think you deserve what you get
    they watched the entire movie
    they watched the whole episode
    they watched the fuck out of it
    they watched the whole thing in silence
    good jobs for those with education
    good jobs for American workers
    good jobs for the jobless
    good jobs for our citizens
    jumping right out of the water
    jumping right out of the gates
    jumping right out of my head
    jumping right out of bed
    the trains are always late
    the trains are a disaster
    the trains are coming to get you
    the trains are on the way back to Japan
    sit at the front of the bus
    sit at the head of the table
    sit at the gilded altar for it
    sit at the door ready for my husband
    do you prefer a window seat
    do you prefer a different device?
    do you prefer a slow cooker?
    do you prefer a rougher texture?
    the food at this restaurant
    the food at the store was great
    the food at restaurants is high quality
    the food at the end of the road
    the elevator door appears to be stuck
    the elevator door appears on the screen
    the elevator door slammed to a halt
    the elevator door opens into the hall
    raindrops keep falling on my head
    raindrops keep falling on you
    raindrops keep falling on my face
    raindrops keep falling throughout the day
    spill coffee on the carpet
    spill coffee on an outdoor picnic table
    spill coffee on an everyday basis
    spill coffee on the pavement
    an excellent way to communicate
    an excellent way to improve your athletic performance
    an excellent way to solve this problem
    an excellent way to test it
    faster than a speeding bullet
    faster than a sine wave
    faster than a credit card
    faster than a bolt-action rifles
    nothing wrong with his style
    nothing wrong with your tummy
    nothing wrong with doing what you want
    nothing wrong with Mr
    arguing with the boss is futile
    arguing with the woman
    arguing with the NSA on these issues?
    arguing with the size of the bill
    taking the train is usually faster
    taking the train to the capital in January
    taking the train back from the airport
    taking the train
    what goes up must come down
    what goes up must come down, and vice
    what goes up must come down, you see
    what goes up, must come down
    be persistent to win a strike
    be persistent to draw some attention
    be persistent to the last
    be persistent to reduce the number of ads
    why do you ask silly questions
    why do you need that?
    why do you ask me?
    why do you think we named it that!?
    that is a very nasty cut
    that is a very serious matter
    that is a very, very bad idea
    that is a very sad day for us
    learn to walk before you run
    learn to walk up the steps with ease
    learn to walk before you learn to run
    learn to walk like everyone else
    insurance is important for bad drivers
    insurance is important for many Americans
    insurance is important for many people
    insurance is important for everyone
    traveling to conferences is fun
    traveling to conferences and public speaking engagements
    traveling to conferences in Tokyo and Beijing
    traveling to conferences or conventions in China
    do you get nervous when you speak
    do you get nervous when you get older?
    do you get nervous when you do yoga?
    do you get nervous when you change it?
    pumping helps if the roads are slippery
    pumping helps if the roads are dry
    pumping helps if they are getting enough moisture
    pumping helps if the sponge has dried out?
    parking tickets can be challenged
    parking tickets can be found online here
    parking tickets can be purchased online
    parking tickets can be found here!
    find a nearby parking spot
    find a nearby restaurant and eat
    find a nearby bar and spend the night
    find a nearby dog park
    gun powder must be handled with care
    gun powder must be sold separately
    gun powder must be poured over it
    gun powder must be kept clean and dry
    just what the doctor ordered
    just what the Russian hackers intended all along
    just what the man wanted
    just what the US
    a rattle snake is very poisonous
    a rattle snake is an enigma
    a rattle snake and no rattles
    a rattle snake in Africa
    weeping willows are found near water
    weeping willows are found in clusters
    weeping willows are almost everywhere here
    weeping willows are usually best
    I cannot believe I ate the whole thing
    I cannot believe my ears
    I cannot believe I ate so much
    I cannot believe it
    the biggest hamburger I have ever seen
    the biggest hamburger I have ever eaten
    the biggest hamburger I have ever had
    the biggest hamburger chain in the U
    gamblers eventually loose their shirts
    gamblers eventually loose the game
    gamblers eventually loose their wits
    gamblers eventually loose all their savings
    exercise is good for the mind
    exercise is good for your health
    exercise is good for you
    exercise is good for us, too
    irregular verbs are the hardest to learn
    irregular verbs are the hardest one
    irregular verbs are regular ones
    irregular verbs are agglutinative
    they might find your comment offensive
    they might find your plans are negotiable
    they might find your copy interesting or useful
    they might find meaning or depth somewhere else
    tell a lie and your nose will grow
    tell a lie and your nose bleeds
    tell a lie and not the truth
    tell a lie and get away with it
    an enlarged nose suggests you are a liar
    an enlarged nose suggests that they are not related!
    an enlarged nose- and eardrum
    an enlarged nose
    lie detector tests never work
    lie detector tests revealed that 2.8 billion
    lie detector tests
    lie detector tests are under way
    do not lie in court or else
    do not lie to yourself
    do not lie in court
    do not lie to me any longer
    most judges are very honest
    most judges are also juries
    most judges are more open and friendly
    most judges are female
    only an idiot would lie in court
    only an idiot might think that
    only an idiot would lie to you
    only an idiot would do that
    important news always seems to be late
    important news always seems to precede it
    important news always seems to end up there
    important news always seems to originate from China
    please try to be home before midnight
    please try to be sensitive to your audience
    please try to stay as far away as possible
    please try to be kind to them
    if you come home late the doors are locked
    if you come home to a cock and balls?
    if you come home late from your night shift?
    if you come in at No
    dormitory doors are locked at midnight
    dormitory doors are locked for privacy
    dormitory doors are locked from the inside
    dormitory doors are locked
    staying up all night is a bad idea
    staying up all night is a luxury
    staying up all night is a waste!
    staying up all night is a little difficult
    you are a capitalist pig
    you are a coward
    you are a person who believes in something
    you are a medicine man for God
    motivational seminars make me sick
    motivational seminars make you feel good
    motivational seminars make you do something
    motivational seminars make increasingly specific suggestions
    questioning the wisdom of the courts
    questioning the wisdom of such a plan
    questioning the wisdom of US
    questioning the wisdom of intervening
    the first time he tried to swim
    the first time this has happened in 15 years
    the first time
    the first time he tried that in public
    a steep learning curve in riding a unicycle
    a steep learning curve in riding a bicycle
    a steep learning curve in riding a bike
    a steep learning curve in riding a motorcycle
    a good stimulus deserves a good response
    a good stimulus deserves a good reward
    a good stimulus deserves a good target
    a good stimulus deserves a bad name
    everybody looses in custody battles
    everybody looses in this show
    everybody looses in order to win
    everybody looses in the midst of sorrow?
    put garbage in an abandoned mine
    put garbage in his house
    put garbage in my mouth
    put garbage in your garbage can
    employee recruitment takes a lot of effort
    employee recruitment takes a long time
    employee recruitment takes a lot of work
    employee recruitment takes a lot of time!
    experience is hard to come by
    experience is hardwired into us
    experience is hard to justify
    experience is hard to find
    everyone wants to win the lottery
    everyone wants to win
    everyone wants to win, I think
    everyone wants to win the big games
    the picket line gives me the chills
    the picket line gives you clarity of vision
    the picket line gives us hope
    the picket line gives me great pleasure`
