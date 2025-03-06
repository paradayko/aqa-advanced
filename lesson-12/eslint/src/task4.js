class fetchHandler {
  constructor(url, headers = {}) {
    this.url = url;
    this.headers = headers;
  }

  async fetchCall(apiSubPath, method = 'GET') {
    const response = await fetch(`${this.url}${apiSubPath}`, {method, headers: this.headers});
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return response.json();
  }
}

class fetchHandler2 extends fetchHandler {
  constructor(url, headers = {}) {
    super(url, headers);
  }

  async fetchUser(userId) {
    try {
      return await this.fetchCall(`/users/${userId}`);
    } catch (e) {
      console.error(`Error fetching user: ${e.message}`);
    }
  }

  async fetchTodo(todoId) {
    try {
      return await this.fetchCall(`/todos/${todoId}`);
    } catch (e) {
      console.error(`Error fetching todo: ${e.message}`);
    }
  }
}

const fetcher = new fetchHandler2('https://jsonplaceholder.typicode.com');

const asyncCaller = async() => {
  try {
    const user = await fetcher.fetchUser(1);
    console.log('User Data:', user);

    const todo = await fetcher.fetchTodo(1);
    console.log('Todo Data:', todo);
  } catch (error) {
    console.error('Error:', error);
  }
};

asyncCaller();
