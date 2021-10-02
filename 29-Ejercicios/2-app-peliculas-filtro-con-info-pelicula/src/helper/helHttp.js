export const get=async(url)=>{
    const option={
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmVjYjZhZmFhMGU0MDZhNzYxNzU5OTc5NjZhMDkxOSIsInN1YiI6IjYxNTY0NTMwZjA0ZDAxMDA5MWQxZjBhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hP1dlZP6UKHHzpjDy0qgmpccA9qG1MNND0Ggts86Z7w",
            "Content-Type": "application/json;charset=utf-8",
            
        }
    }
    return await fetch(url,option).then(data=>data.json())
}