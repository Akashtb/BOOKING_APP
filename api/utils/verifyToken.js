// import jwt from 'jsonwebtoken'
// import { createError } from '../utils/error.js'

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token
//   if (!token)
//     return next(createError(401, 'You are not login in. please LOGIN IN !..'))

//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) return next(createError(403, 'Token is not valid!'))
//     req.user = user
//     next()
//   })
// }

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next()
//     } else {
//       if (err) return next(createError(403, 'You are not the authorized user'))
//     }
//   })
// }



import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return next(createError(401, 'You are not logged in. Please log in.'))
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, 'Token is not valid!'))
    }
    req.user = user
    next()
  })
}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      return next(
        createError(403, 'You are not authorized to access this resource.')
      )
    }
  })
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      return next(
        createError(403, 'You are not an admin to perform this operation.')
      )
    }
  })
}

// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res,next ,() => {
//     if (req.user.isAdmin) {
//       next()
//     } else {
//       if (err)
//         return next(
//           createError(403, 'You are not an admin to perform this operation')
//         )
//     }
//   })
// }

