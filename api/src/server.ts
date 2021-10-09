import App from './app';

const PORT = process.env.PORT || 4000;

try {
    App.listen(PORT, () => {
        console.log(`API is running on port ${PORT}`);
    })

} catch (error) {
    console.log('Failed to start API', error);
}