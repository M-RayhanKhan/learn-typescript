//destructuring 

    const users = {
        firstName: 'md',
        lastName: 'khan',
        location: {
            village: 'chariany',
            address: 'produniya vari'
        },
        contactNo: '01826059466',
        profession: 'Development'
    }

    const { firstName, location: { village: gram } } = users


    const friendsName = ['hossain', 'jubayer', 'abu bokor', 'babu', 'rakib'];

    const [,, bestFried, ...rest] = friendsName

