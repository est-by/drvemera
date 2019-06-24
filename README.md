# drvemera
Клиентский драйвер для Энергомеры  (project\src\client\js\app\project\plugins\drivers)

1. 
Для подключения в приложение, добавить в файл:

..\project\src\client\js\app\project\plugins\drivers

Загрузку:

drivers.prototype.list =
[
	{
		lic: EnergyType.Electro,
		canCreate: true,
	        dir: "drvemera"
	},	

2. Удалить папку ..\project\bin\data\websrvstore
Или запустить в режиме отладки.


