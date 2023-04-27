const errorController = (req, res) => {
    res.status(422).json({message: 'Gambar max 2mb'})
}

export default errorController