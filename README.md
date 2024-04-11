# PeerReview
## Description
This is the back end for an app that allows users to post their thoughts and respond to other people’s thoughts.  It uses a nosql database and uses mongoose to connect to it.  It has the capability to support creating, updating, and deleting posts and users.  Reactions are stored in a schema through thoughts. Also users can add and delete friends from their profile.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

Download or copy the repository, it requires nodejs, mongodb, mongoose and express.


## Usage

[Video](https://drive.google.com/file/d/1W_CB1T0weeBxEJcCMbxgJG2QIkCZwa4x/view?usp=sharing)

 ### Thoughts
api/thoughts 
- Get - get all thoughts
- Post - add thought
api/thoughts/:id
- Get - get one thought by id
- Delete - delete by id
- Put - update by id

### Users 

api/users
- Get - get all users
- Post - create user

api/users/:id 
- Get - get one user by id
- Delete - delete by id
- Put - update by id

api/users/:id/friends
(api/users/userId/friends)
- Post - add friend (requires id of desired friend)
api/users/:id/friends/:friendId
- Delete - delete friend by id


## Credits
Seed Data: 

Thoughts: [Rikki Tikki Tavy](https://www.cs.cmu.edu/~mongoose/rtt.html) 

Usernames: [Fantasy Name Generator Vampire Names](https://www.fantasynamegenerators.com/vampire-names.php)

Emails: [Fantasy Name Generator Ent Names](https://www.fantasynamegenerators.com/ent-names.php)



## License

MIT
