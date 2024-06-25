<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtMiddleware extends BaseMiddleware
{
    public function handle($request, Closure $next)
    {
        try {
            // Intenta verificar el token JWT y obtener el usuario autenticado
            $user = JWTAuth::parseToken()->authenticate();

            if (!$user) {
                return response()->json(['error' => 'Usuario no encontrado'], 404);
            }
        } catch (Exception $e) {
            // Captura cualquier excepción JWT y maneja la respuesta
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response()->json(['error' => 'Token inválido'], 401);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(['error' => 'Token expirado'], 401);
            } else {
                return response()->json(['error' => 'Token de autorización no encontrado'], 401);
            }
        }

        // Si el token es válido, pasa la solicitud al siguiente middleware o controlador
        return $next($request);
    }
}