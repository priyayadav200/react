export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/priyayadav200')
    return res.json()
}