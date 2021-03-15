export const users = [
    {
      email: 'cxbx2vr3bs@the23app.com',
      password: 'qwerty123',
      inUse: false,
      id: 1
    },
    {
      email: 'cxbx2vr3bs@the24app.com',
      password: 'qwerty123',
      inUse: false,
      id: 2
    },
    {
      email: 'cxbx2vr3bs@the25app.com',
      password: 'qwerty123',
      inUse: false,
      id: 3
    },
    {
      email: 'cxbx2vr3bs@the26app.com',
      password: 'qwerty123',
      inUse: false,
      id: 4
    }
  ]

  export function use(id) {
    users.forEach(item => {
      if(item.id === id){
        item.inUse = true;
      }
    });
  }

  export function unuse(id) {
    users.forEach(item => {
      if(item.id === id){
        item.inUse = false;
      }
    });
  }

  export function getFreeUser() {
    return users.find(user => !user.inUse);
  }