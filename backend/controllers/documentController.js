import Document from '../models/document.js';


export const getAllDocuments = async(req, res) => {
    const { page = 1, limit = 10, type } = req.query;
    const where = type ? { type } : {};
    const documents = await Document.findAndCountAll({
        where,
        limit,
        offset: (page - 1) * limit
    });
    res.json(documents);
};

export const createDocument = (req, res) => {  
    const { name, type, description } = req.body;
    Document.create({
        name,
        type,
        description
    })
    .then(newDocument => {
        res.status(201).json(newDocument);
    })};

    export const getDocumentById =async (req, res) => {
    const document = await Document.findByPk(req.params.id);
    if (!document) {
        return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
};

export const updateDocument=  async(req,res) => {
    const document = await Document.findByPk(req.params.id);
    if (!document) {
        return res.status(404).json({ message: 'Document not found' });
    }
    await document.update(req.body);
    res.json(document);
};

export const deleteDocumentById = async(req, res) => { 
    const document = await Document.findByPk(req.params.id);
    if (!document) {
        return res.status(404).json({ message: 'Document not found' });
    }
    await document.destroy();
    res.json({ message: 'Document deleted' });
};
