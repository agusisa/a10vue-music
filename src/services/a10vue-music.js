import trae from 'trae';
import axios from 'axios';

import configService from './config'

const a10vueMusicService = trae.create({
    baseUrl: configService.apiUrl
})

export default a10vueMusicService