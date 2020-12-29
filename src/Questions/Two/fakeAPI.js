export default function fakeAPI() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.1) {
      reject(new Error("Internal server error"));
    }

    setTimeout(() => {
      const numberOfUsers = Math.floor(Math.random() * 1000)
      const users = [...Array(numberOfUsers).keys()].map(num => ({
        username: `User ${num}`,
        watchTime: Math.floor(Math.random() * 100)
      }))
  
      resolve(users)
    }, 500);
  });
}