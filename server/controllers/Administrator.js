import Admin from '../models/Admin.js'

//register
export const register = async(req,res) => {
    const admin = new Admin(req.body)
    try {
        const regAdmin = await admin.save()
        res.status(201).json(regAdmin)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
