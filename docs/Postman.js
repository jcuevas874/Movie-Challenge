{
	"info": {
		"_postman_id": "fc290a78-0768-4e3d-ab5e-a31b1bae8923",
		"name": "CLM MovieNodeChallenge",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "MovieSearch",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Year",
						"value": "",
						"type": "text",
						"disabled": true
					}
				],
				"url": {
					"raw": "localhost:5000/batman",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"batman"
					]
				}
			},
			"response": []
		},
		{
			"name": "SearchDatabase",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "page",
						"value": "",
						"type": "text"
					},
					{
						"key": "limit",
						"value": "",
						"type": "text"
					}
				],
				"url": {
					"raw": "localhost:5000/",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "SearchAndReplace",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "year",
						"value": "1989",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"movie\": \"Batman\",\n    \"find\": \"Gotham\",\n    \"replace\": \"CLM Dev\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						""
					]
				}
			},
			"response": []
		}
	]
}