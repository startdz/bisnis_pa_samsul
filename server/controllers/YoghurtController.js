import Yoghurt from '../models/Yoghurt.js'

const YoghurtController = {

    createYoghurt: async (req, res, next) => {

        const img = req.file

        if (!img) {
            res.status(422).json({ message: "Tidak ada gambar yang ter-upload!" })
            return false
        } else if (img.size >= 2000000) {
            res.status(422).json({ message: "Ukuran gambar max 2mb" })
            return false
        } else if (img.mimetype !== 'image/png' || img.mimetype !== 'image/jpg' || img.mimetype !== 'image/jpeg') {
            res.status(422).json({ message: "Format gambar tidak didukung!, Isi data yang benar" })
            return false
        }

        try {
            const create = new Yoghurt({
                title: req.body.title,
                description: req.body.description,
                image: {
                    data: img.encoding,
                    originalName: img.filename,
                    ContentType: img.mimetype
                },
                url: `${req.protocol}://${req.get("host")}/images/${img.filename}`,
                price: req.body.price,
                stock: req.body.stock
            })
            await create.save()
            res.status(201).json(create)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },

    getYoghurts: async (req, res, next) => {
        try {
            const results = await Yoghurt.find()
            res.status(200).json(results)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    },

    getYoghurt: async (req, res, next) => {
        try {
            const result = await Yoghurt.findById(req.params.id)
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    },

    updateYoghurt: async (req, res, next) => {

        const img = req.file

        const _dataID = await Yoghurt.findById(req.params.id)
        const { image: { data, originalName, ContentType, createdAt } } = _dataID

        let image = {
            data: {},
            originalName: '',
            ContentType: '',
            createdAt: {}
        }
        let url = ''

        if (!img) {
            image = { data, originalName, ContentType, createdAt }
            url = _dataID.url
        } else {
            if (img.size >= 2000000) {
                res.status(422).json({message: "Gambar max 2mb"})
                return false
            }
            if (img.mimetype !== 'image/png' ||img.mimetype !== 'image/jpg' || img.mimetype !== 'image/jpeg') {
                res.status(422).json({message: "Format gambar tidak didukung!"})
                return false
            }

            try {
                const update = await Yoghurt.updateOne(
                    _dataID,
                    {
                        $set: {
                            title: req.body.title,
                            description: req.body.description,
                            image: {
                                data: img.encoding,
                                originalName: img.filename,
                                ContentType: img.mimetype
                            },
                            url: `${req.protocol}://${req.get("host")}/images/${img.filename}`,
                            price: req.body.price,
                            stock: req.body.stock
                        }
                    }
                )
                res.status(200).json(update)
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        }
    },

    /**
     * Method for Debugging, Below :
     * Posting
     * Update 
     * Get
     * @getDebugYoghurt
     * @postDebugYoghurt
     */

    getDebugYoghurt: async (req, res, next) => {
        try {
            const _dataID = await Yoghurt.findById(req.params.id)
            const { image: { data, originalName, ContentType } } = _dataID
            res.json(originalName)
        } catch (error) {

        }
    },

    postDebugYoghurt: async (req, res, next) => {
        try {
            const _postDebugImage = req.file
            console.log(_postDebugImage)
        } catch (error) {

        }
    }

}

export default YoghurtController