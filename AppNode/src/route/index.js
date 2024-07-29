const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Esta es una imagen creado y corriendo una app en NodeJS con Express'
    });
});


module.exports = router;