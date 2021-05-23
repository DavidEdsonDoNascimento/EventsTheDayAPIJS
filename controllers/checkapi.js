module.exports = app => {
    app.get('/status', (req, res) => {
        return res.status(200).json({ success: true })
    })
}