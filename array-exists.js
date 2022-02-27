
// isArray 
function megaFriends(friends){
    // alert isArray
    if(Array.isArray(friends) == false){
        return 'please provide an array'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['shao', 'lala', 'mamona', 'buddy'];
const buddy = megaFriends(friends);
console.log(buddy);

// indexOf
if(friends.indexOf('lala') != -1){
    console.log('lala exists !');
}

// includes
if(friends.includes('lala')){
    console.log('lala exists by includes!');
}

// concat
const first = [1, 2, 3, 4];
const second = [4, 5, 6, 7];
const combined = first.concat(second);
console.log(combined);