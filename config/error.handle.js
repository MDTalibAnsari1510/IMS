// Error handling middleware
export const errorMidlleware = (err, req, res, next) => {
    console.error(err.stack);
    if (err) {
        res.status(500).send('Something went wrong!');
    } else {
        next();
    }
}